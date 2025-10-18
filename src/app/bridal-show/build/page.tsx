"use client";

import { Couple } from "@/interface/Couple";
import { parseFormData } from "@/utils/formUtils";
import { Button, Datepicker, Label, TextInput } from "flowbite-react";
import { Bot } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

export default function Build() {
  const [couples, setCouples] = useState<Couple[]>([]);

  const addCouple = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const couple = parseFormData<Couple>(e.currentTarget);
    const response = await fetch("/api/couples", {
      method: "POST",
      body: JSON.stringify(couple)
    });

    if (!response.ok) {
      console.error("Something went wrong: ", response);
      return;
    }

    console.log("form data using my util: ", couple);
    setCouples((prev) => [...prev, couple]);
  };

  useEffect(() => {
    const getCouples = async () => {
      const response = await fetch("/api/couples");
      const couples = await response.json();
      console.log("couples", couples);
      if (couples.length) setCouples(couples);
    };

    if (!couples.length) getCouples();
  });
  return (
    <div className="cov-container">
      <section>
        <h1 className="pageH1">Build Email List</h1>

        <form
          className="flex flex-col gap-4"
          method="post"
          onSubmit={addCouple}
        >
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
                defaultValue="p@tom.com"
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
      {couples.length > 0 && (
        <section className="mt-5">
          <h2 className="text-3xl mb-4">Couples List</h2>
          {couples.map((c, idx) => {
            return (
              <p
                key={idx}
                className="p-3 border-2 border-primary rounded-md mb-2"
              >
                {c.brideName} and {c.groomName}
              </p>
            );
          })}
          <button className="cov-btn">
            Create Emails <Bot className="inline-block" />
          </button>
        </section>
      )}
    </div>
  );
}
