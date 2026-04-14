export const isExternalUrl = (value: string) => /^https?:\/\//.test(value);

export const withBase = (value: string) => {
  if (!value || isExternalUrl(value)) {
    return value;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = value.startsWith("/") ? value.slice(1) : value;

  return `${normalizedBase}${normalizedPath}`;
};
