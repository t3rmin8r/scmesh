const SAFE_EXTERNAL_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

const isInternalPath = (value: string) =>
  value.startsWith("/") && !value.startsWith("//");

export const isExternalUrl = (value: string) => {
  try {
    const url = new URL(value);
    return SAFE_EXTERNAL_PROTOCOLS.has(url.protocol);
  } catch {
    return false;
  }
};

export const withBase = (value: string) => {
  if (!value || isExternalUrl(value) || value.startsWith("#") || value.startsWith("?")) {
    return value;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = value.startsWith("/") ? value.slice(1) : value;

  return `${normalizedBase}${normalizedPath}`;
};

export const getSafeHref = (value: string) => {
  if (!value) {
    return null;
  }

  if (isInternalPath(value)) {
    return withBase(value);
  }

  if (value.startsWith("#") || value.startsWith("?")) {
    return value;
  }

  try {
    const url = new URL(value);
    return SAFE_EXTERNAL_PROTOCOLS.has(url.protocol) ? url.toString() : null;
  } catch {
    return null;
  }
};
