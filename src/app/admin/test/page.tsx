"use client";



import React from "react";
import { useState } from "react";
import { ModalForm } from "@/components/ModalForm";
import * as Yup from "yup";

export default function ExamplePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <button onClick={() => setOpen(true)}>Open Form</button>
      <ModalForm
        open={open}
        onOpenChange={setOpen}
        columns={2}
        title="User Registration"
        description="Fill out the form below."
        fields={[
          {
            name: "name",
            label: "Full Name",
            type: "text",
            placeholder: "Jane Doe",
            validation: Yup.string().required("Name is required"),
          },
          {
            name: "email",
            label: "Email",
            type: "text",
            placeholder: "email@example.com",
            validation: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
          },
          {
            name: "dob",
            label: "Date of Birth",
            type: "date",
            validation: Yup.date()
              .nullable()
              .required("Date of birth is required"),
            colSpan: 2,
          },
          {
            name: "newsletter",
            label: "Subscribe to newsletter",
            type: "file",
            colSpan: 2,
          },
          {
            name: "gender",
            label: "Gender",
            type: "radio",
            options: [
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ],
            validation: Yup.string().required("Select a gender"),
          },
          {
            name: "country",
            label: "Country",
            type: "select",
            placeholder: "Choose a country",
            options: [
              { label: "USA", value: "us" },
              { label: "Canada", value: "ca" },
              { label: "UK", value: "uk" },
            ],
            validation: Yup.string().required("Country is required"),
          },
        ]}
        onSubmit={(values) => {
          console.log("Submitted values:", values);
          setOpen(false);
        }}
        onReset={() => {}}
      />
    </div>
  );
}