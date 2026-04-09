"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";

export const Header = () => {
  return (
    <SidebarProvider className="min-h-0">
      <Sidebar collapsible="none" className="flex w-[500px] flex-col h-[calc(100vh-4rem)] bg-transparent border-none">
        <SidebarHeader className="p-0">
          <h2 className="py-4 text-lg font-semibold">SkillZillA</h2>
        </SidebarHeader>
        <SidebarContent className="flex-1 p-0">
          {/* Chat messages will be rendered here by the backworkflow */}
          <div className="flex flex-col gap-4 overflow-y-auto pr-2 pb-4">
            <div className="flex w-full justify-start">
              <div className="max-w-[85%] rounded-2xl bg-muted px-4 py-3 text-sm">
                Hello! I'm the SkillZillA. How can I help you discover and explore our artwork today?
              </div>
            </div>
            <div className="flex w-full justify-end">
              <div className="max-w-[85%] rounded-2xl bg-primary text-primary-foreground px-4 py-3 text-sm">
                Can you show me some urban photography?
              </div>
            </div>
            <div className="flex w-full justify-start">
              <div className="max-w-[85%] rounded-2xl bg-muted px-4 py-3 text-sm">
                I'd be happy to! Searching our collection for urban photography...
              </div>
            </div>
          </div>
        </SidebarContent>
        <SidebarFooter className="p-0 pb-4 w-full">
          <PromptInputBox placeholder="Ask me anything..." className="w-full" />
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};
