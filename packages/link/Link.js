import React from 'react';
import PropTypes from 'prop-types';
import { isAbsoluteUrl } from '@availity/resolve-url';

// if absolute or loadApp is disabled, return url. otherwise loadappify the url
export const getUrl = (url = '', loadApp) => {
  const absolute = isAbsoluteUrl(url);
  if (absolute || !loadApp) return url;

  return `/public/apps/home/#!/loadApp?appUrl=${encodeURIComponent(url)}`;
};

const AvLink = ({
  tag: Tag,
  url,
  target,
  children,
  onClick,
  loadApp,
  ...props
}) => (
  <Tag
    href={getUrl(url, loadApp)}
    target={target}
    onClick={event => onClick && onClick(event, getUrl(url, loadApp))}
    data-testid="av-link-tag"
    {...props}
  >
    {children}
  </Tag>
);

AvLink.defaultProps = {
  tag: 'a',
  loadApp: true,
};

AvLink.propTypes = {
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  loadApp: PropTypes.bool,
};

export default AvLink;
