import SettingNav from "@/components/SettingNav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { authOptions, getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const HelpCenterPage = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect(authOptions?.pages?.signIn || "/");
  }

  return (
    <div className="max-w-7xl mx-auto p-4 py-4 lg:p-0">
      <h1 className="text-xl font-semibold mb-4">Settings</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <SettingNav />
        </div>
        <div className="col-span-3">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
