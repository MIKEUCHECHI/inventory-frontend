import { Environment } from "./environment";

export interface LoginWithEmailPayload {
  email?: string;
  password?: string;
}

export interface LoginWithEmailResponsePayload {
  status: boolean;
  message: string;
  data: {
    id: string;
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
  };
}

export interface RegisterWithEmailPayload {
  last_name: string;
  first_name: string;
  email: string;
  password: string;
  phone_number: string;
  confirm_password: string;
}

export interface RegisterWithEmailResponsePayload {
  status: boolean;
  message: string;
  data: {
    id: string;
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
  };
}

export interface ErrorPayload {
  statusCode: number;
  message: string;
  error: string;
}

export interface GetS3LinkPayload {
  file: string;
  url: string;
}

export interface GetS3LinkErrorPayload {
  status: number;
  message: string;
  name: string;
}

const authenticate = async ({
  url,
  body,
}: {
  url?: string;
  body: LoginWithEmailPayload;
}) => {
  try {
    const fetchResponse = await fetch(`${Environment.backendUrl}/auth${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await fetchResponse.json();

    if (data?.error) {
      throw new Error((data as ErrorPayload)?.message);
    }
    return data;
  } catch (e) {
    throw new Error("Something went wrong");
  }
};

export const refreshToken = async ({
  url,
  refreshToken,
}: {
  url?: string;
  refreshToken: string;
}) => {
  try {
    const fetchResponse = await fetch(`${Environment.backendUrl}/auth${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const data = await fetchResponse.json();

    if (data?.error) {
      throw new Error((data as ErrorPayload)?.message);
    }
    return data;
  } catch (e) {
    throw new Error("Something went wrong");
  }
};

export default authenticate;
