import PubStep1 from "@/components/PubSteps/PubStep1/PubStep1";
import PubStep2 from "@/components/PubSteps/PubStep2/PubStep2";
import PubStep3 from "@/components/PubSteps/PubStep3/PubStep3";
import PubStep4 from "@/components/PubSteps/PubStep4/PubStep4";
import TopStep from "@/components/TopStep/TopStep";
import useMultiStepFormStore from "@/store/Zustand/Store";

export default function MultiStepForm() {
  const { step } = useMultiStepFormStore();

  return (
    <main className="multi-step-form">
      <TopStep prog={`${(100 / 3) * (step - 1)}%`} />
      {step == 1 && <PubStep1 />}
      {step == 2 && <PubStep2 />}
      {step == 3 && <PubStep3 />}
      {step == 4 && <PubStep4 />}
    </main>
  );
}
