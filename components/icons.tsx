import { LucideProps, MessageSquare, User } from "lucide-react";

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg viewBox="0 0 375 374.999991" {...props}>
      <defs>
        <clipPath id="e1c9e3599e">
          <path
            d="M 214 61 L 374.960938 61 L 374.960938 314 L 214 314 Z M 214 61 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="31544dba44">
          <path
            d="M 110 10.910156 L 306 10.910156 L 306 155 L 110 155 Z M 110 10.910156 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="1a4b37b0aa">
          <path
            d="M 69 220 L 265 220 L 265 364.160156 L 69 364.160156 Z M 69 220 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <path
        fill="#18181b"
        d="M 160.761719 187.5 L 56.996094 61.132812 L 0.132812 61.132812 L 103.898438 187.5 L 0.132812 313.867188 L 56.996094 313.867188 Z M 160.761719 187.5 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <g clipPath="url(#e1c9e3599e)">
        <path
          fill="#18181b"
          d="M 318.066406 61.132812 L 214.230469 187.5 L 318.066406 313.867188 L 374.855469 313.867188 L 271.09375 187.5 L 374.855469 61.132812 Z M 318.066406 61.132812 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#31544dba44)">
        <path
          fill="#18181b"
          d="M 187.53125 154.9375 L 264.59375 61.132812 L 305.847656 10.910156 L 248.984375 10.910156 L 207.734375 61.132812 L 187.53125 85.78125 L 167.328125 61.132812 L 110.46875 61.132812 Z M 187.53125 154.9375 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#1a4b37b0aa)">
        <path
          fill="#18181b"
          d="M 187.53125 220.0625 L 110.46875 313.867188 L 69.144531 364.089844 L 126.007812 364.089844 L 167.328125 313.867188 L 187.53125 289.214844 L 207.734375 313.867188 L 264.59375 313.867188 Z M 187.53125 220.0625 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <path
        fill="#18181b"
        d="M 187.53125 289.214844 L 215.996094 254.601562 L 187.53125 220.0625 L 160.761719 187.5 L 110.46875 195.410156 Z M 187.53125 289.214844 "
        fillOpacity="1"
        fillRule="nonzero"
      />
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  commentReply: MessageSquare,
};
