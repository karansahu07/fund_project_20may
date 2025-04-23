import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export function AddEmployeeForm() {
  return (
    <ShowcaseSection title="Add Employee" className="!p-6.5">
      <form action="#">
        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
          <InputGroup
            label="First name"
            type="text"
            placeholder="Enter your first name"
            className="w-full xl:w-1/2"
          />

          <InputGroup
            label="Last name"
            type="text"
            placeholder="Enter your last name"
            className="w-full xl:w-1/2"
          />
        </div>

        <InputGroup
          label="Email"
          type="email"
          placeholder="Enter your email address"
          className="mb-4.5"
          required
        />

        <InputGroup
          label="Phone"
          type="phone"
          placeholder="Enter your phone"
          className="mb-4.5"
        />
        <InputGroup
          label="Date of Joining"
          type="text"
          placeholder=""
          className="mb-4.5"
        />
        <InputGroup
          label="Date of Birth"
          type="dob"
          placeholder="Enter DOB"
          className="mb-4.5"
        />

        

        {/* <TextAreaGroup label="Message" placeholder="Type your message" /> */}

        <button className="mt-6 flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
          Send Message
        </button>
      </form>
    </ShowcaseSection>
  );
}
