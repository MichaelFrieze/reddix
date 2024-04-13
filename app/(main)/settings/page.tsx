import { UserProfile } from "@clerk/nextjs";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* <UserProfile /> */}
      <UserProfile
        appearance={{
          elements: {
            navbarMobileMenuRow: "hidden",
            rootBox: "bg-slate-50 rounded-lg my-4 sm:my-8 shadow-none w-full",
            cardBox: "shadow-none w-full",
            pageScrollBox: "px-0 sm:px-4 py-4",
            card: "w-full h-full mx-auto shadow-none bg-slate-50",
            navbar: "border-none hidden",
            navbarButton: "py-3 px-4 my-1 rounded-medium text-body",
          },
        }}
      />
    </div>
  );
}
