"use client";

import { Couple } from "@/interface/Couple";
import { parseFormData } from "@/utils/formUtils";
import { Button, Datepicker, Label, TextInput } from "flowbite-react";
import { FormEvent, useState } from "react";

export default function Build() {
  const [couples, setCouples] = useState<Couple[]>([]);
  const [interactionDate, setInteractionDate] = useState<Date | null>(
    new Date()
  );

  const addCouple = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formJson = parseFormData(e.currentTarget);
    console.log("form data using my util: ", formJson);
    // setCouples((prev) => [...prev]);
  };
  return (
    <section className="cov-container">
      <h1 className="pageH1">Build Email List</h1>

      <form className="flex flex-col gap-4" method="post" onSubmit={addCouple}>
        <div className="grid gap-4 grid-cols-2">
          <div>
            <div className="label-container">
              <Label htmlFor="bride-name">Bride Name</Label>
            </div>
            <TextInput
              id="bride-name"
              name="brideName"
              type="text"
              placeholder="Zendaya Coleman"
              defaultValue={"Porsha"}
              required
            />
          </div>
          <div>
            <div className="label-container">
              <Label htmlFor="groom-name">Groom Name</Label>
            </div>
            <TextInput
              id="groom-name"
              name="groomName"
              type="text"
              placeholder="Tom Holland"
              defaultValue={"Andre"}
              required
            />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2">
          <div>
            <div className="label-container">
              <Label htmlFor="bride-email">Bride Email</Label>
            </div>
            <TextInput
              id="bride-email"
              name="brideEmail"
              type="email"
              placeholder="zendaya@mj.com"
              defaultValue={"p@tom.com"}
              required
            />
          </div>
          <div>
            <div className="label-container">
              <Label htmlFor="groom-email">Groom Email</Label>
            </div>
            <TextInput
              id="groom-email"
              name="groomEmail"
              type="email"
              placeholder="tom@spidy.webz"
              defaultValue={"a@tom.dev"}
              required
            />
          </div>
        </div>
        <div>
          <div className="label-container flex flex-col">
            <Label htmlFor="special">Something Special</Label>
            <small>
              Add something special or notable about the interaction you had
              with the couple.
            </small>
          </div>
          <TextInput
            id="special"
            name="special"
            type="text"
            defaultValue={"I met them and they were cool."}
          />
        </div>
        <Datepicker maxDate={new Date()} name="bridalShowDate" />
        <Button type="submit" className="cov-btn">
          Submit
        </Button>
      </form>
    </section>
  );
}
