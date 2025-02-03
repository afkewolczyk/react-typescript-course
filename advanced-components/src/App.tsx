import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Card from "./components/Card";
import { IconButton } from "./components/IconButton";
import { List } from "./components/List";
import { useRef } from "react";
import Form, { type FormHandle } from "./components/Form";

function HeartIcon() {
  return <span>❤️</span>;
}
function App() {
  const input = useRef<HTMLInputElement>(null);

  // List demo:
  const users = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
  ];

  const hobbies = ["Sports", "Reading", "Cooking"];

  // For form:
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    // convert type:
    if (
      !data ||
      typeof data !== "object" ||
      !("name" in data) ||
      !("age" in data)
    ) {
      return;
    }
    // at this point, TypeScript knows that data MUST BE an object
    // with a name and age property
    // otherwise, the previous if statement would have returned
    console.log(data);
    customForm.current?.clear();
  }

  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" ref={input} />
      <Input id="age" label="Your age" type="number" /> */}

      <Button target="">A button</Button>
      <Button href="https://www.google.com">A link</Button>
      <Container as={Button}>Click me</Container>

      <Card
        title="My Card"
        actions={
          <button onClick={() => console.log("Button clicked")}>
            Click me!
          </button>
        }
      >
        <p>Some Content</p>
      </Card>

      {/* Icon button: */}
      <IconButton
        icon={HeartIcon}
        onClick={() => console.log("Button Clicked!")}
      >
        Like
      </IconButton>

      {/* List demo */}
      <section>
        <h2>Users</h2>
        <List
          items={users}
          renderItem={(user: { id: string; name: string }) => (
            <li key={user.id}>{user.name}</li>
          )}
        />
      </section>
      <section>
        <h2>Hobbies</h2>
        <List
          items={hobbies}
          renderItem={(hobby: string) => <li key={hobby}>{hobby}</li>}
        />
      </section>

      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
