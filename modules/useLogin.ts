import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { useAuthState } from '../state/useAuthState';

type Role = 'user' | 'admin';

export interface TokenPayload {
  exp: number;
  'https://hasura.io/jwt/claims': {
    'X-Hasura-User-Id': string;
    'x-hasura-allowed-roles': Array<Role>;
    'x-hasura-default-role': Role;
  };
  iat: string;
  sub: string;
}

export function useLogin() {
  const { token } = useAuthState();

  const router = useRouter();

  const { isReady } = useRouter();

  if (isValidToken(token) || !isReady) {
    return;
  } else {
    router.push('/');
  }
}

export function isValidToken(token?: string): boolean {
  if (!token) return false;

  const payload: TokenPayload = jwtDecode(token);
  if (
    !payload['https://hasura.io/jwt/claims']['x-hasura-allowed-roles'].find(
      (role) => role === 'user'
    )
  ) {
    return false;
  }

  return new Date(payload.exp * 1000) > new Date();
}
