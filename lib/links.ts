/**
 * Placeholder-safe link handling.
 *
 * content/site.ts ships with `TODO:` values so nothing is invented. Rather than
 * emitting broken anchors, we render them inert until they're filled in.
 */
export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith("TODO:");
}

/** Strips the marker so placeholders read cleanly in the UI. */
export function clean(value: string): string {
  return isPlaceholder(value) ? value.replace(/^TODO:\s*/, "") : value;
}

export function resolveHref(value: string): string {
  return isPlaceholder(value) ? "#contact" : value;
}

export function mailto(email: string): string {
  return isPlaceholder(email) ? "#contact" : `mailto:${email}`;
}
