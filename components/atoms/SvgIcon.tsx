import { SVGProps } from "react";

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  type:
    | "chevronLeft"
    | "chevronRight"
    | "user"
    | "mail"
    | "message"
    | "check"
    | "externalLink"
    | "sun"
    | "moon";
  size?: "sm" | "md" | "lg";
}

export default function SvgIcon({
  type,
  size = "md",
  className = "",
  ...props
}: SvgIconProps) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const icons = {
    chevronLeft: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    ),
    chevronRight: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    ),
    user: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
    mail: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    message: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
    check: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    ),
    externalLink: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="5" fill="currentColor" />
        <rect x="11" y="1" width="2" height="4" fill="currentColor" />
        <rect x="11" y="19" width="2" height="4" fill="currentColor" />
        <rect x="1" y="11" width="4" height="2" fill="currentColor" />
        <rect x="19" y="11" width="4" height="2" fill="currentColor" />
        <rect x="4" y="4" width="2.83" height="2.83" fill="currentColor" transform="rotate(45 5.41 5.41)" />
        <rect x="17.18" y="17.18" width="2.83" height="2.83" fill="currentColor" transform="rotate(45 18.59 18.59)" />
        <rect x="17.18" y="4" width="2.83" height="2.83" fill="currentColor" transform="rotate(45 18.59 5.41)" />
        <rect x="4" y="17.18" width="2.83" height="2.83" fill="currentColor" transform="rotate(45 5.41 18.59)" />
      </>
    ),
    moon: (
      <path
        fill="currentColor"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    ),
  };

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {icons[type]}
    </svg>
  );
}
