import { UserProfile } from "@clerk/nextjs";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl pb-12">
      <UserProfile
        appearance={{
          elements: {
            navbarMobileMenuRow: "hidden",
            rootBox: "bg-slate-50 shadow-none w-full",
            // cardBox: "shadow-none w-full",
            pageScrollBox: "py-0",
            card: "bg-slate-50 w-full h-full mx-auto shadow-none",
            navbar: "border-none hidden",
            // navbarButton: "py-3 px-4 my-1 rounded-medium text-body",
            // membersPageInviteButton:
            //   "text-primary font-medium bg-interaction-primary hover:bg-interaction-primary-hover rounded-lg px-4 py-2",
          },
        }}
      />
    </div>
  );
}
