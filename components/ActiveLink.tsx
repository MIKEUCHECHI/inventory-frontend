import Link, { LinkProps } from 'next/link';
import React, { Children } from 'react';
import { useRouter } from 'next/router';

export interface Props extends LinkProps {}

/**
 *
 */
const ActiveLink = ({ children, ...props }: React.PropsWithChildren<Props>) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as any;
  const childClassName = child.props.className || '';

  const className =
    asPath.includes(props.href.toString()) || asPath === props.as
      ? `${childClassName} active`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
        style: {
          ...child.props?.style,
          cursor: 'pointer',
        },
      })}
    </Link>
  );
};

export default ActiveLink;
