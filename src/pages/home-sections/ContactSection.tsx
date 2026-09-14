import { PageHeader } from '@/components/ui/PageHeader';

export function ContactSection() {
  return (
    <div>
      <PageHeader 
        title="Let's Build Something Great Together." 
        subtitle="Have an idea, technical challenge, software requirement, hardware project or integration requirement? Tell us about it."
      />

      <section className="py-12 sm:py-20 bg-[#F7FAFF]">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="bg-white p-2 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-border-light relative overflow-hidden flex flex-col items-center">
            <div className="w-full flex justify-center overflow-x-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScAxW6c4X8bFbAmHpgTL-HkNnGkREYJU4ufUGZUf3Nxfsat0Q/viewform?embedded=true" 
                width="100%" 
                height="1450" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                title="JK Softech Solutions Contact Form"
                className="w-full max-w-full sm:max-w-[640px] h-[1450px] sm:h-[1420px] md:h-[1389px] border-0 rounded-lg"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

