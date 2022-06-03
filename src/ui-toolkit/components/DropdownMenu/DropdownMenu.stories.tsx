import { BsChevronDown, BsThreeDots } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../Button/Button";
import { Input } from "../forms";
import { Surface } from "../Surface/Surface";
import { DropdownMenu } from "./DropdownMenu";
const storyConfig = {
  title: "Elements/DropdownMenu",
  component: DropdownMenu,
  argTypes: { children: { control: false } },
};

export const Basic = () => {
  return (
    <Surface>
      <DropdownMenu label="Menu">
        <DropdownMenu.Item href="#">Action 1</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 2</DropdownMenu.Item>
      </DropdownMenu>
      <pre className="mt-5">
        {`<DropdownMenu label="Menu">
  <DropdownMenu.Item>Action 1</DropdownMenu.Item>
  <DropdownMenu.Item>Action 2</DropdownMenu.Item>
</DropdownMenu>`}
      </pre>
    </Surface>
  );
};

export const WithDownCaret = () => {
  return (
    <Surface>
      <DropdownMenu label="Menu" showCaret>
        <DropdownMenu.Item href="#">Action 1</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 2</DropdownMenu.Item>
      </DropdownMenu>
    </Surface>
  );
};
export const Href_or_onclick = () => {
  return (
    <Surface style={{ maxWidth: "600px" }}>
      <div className="d-flex justify-content-between">
        <h2>Dropdown Menu Example</h2>
        <DropdownMenu label="Menu" showCaret>
          <DropdownMenu.Item onClick={() => alert("You clicked the menu item.")}>
            Show Alert
          </DropdownMenu.Item>
          <DropdownMenu.Item href="https://www.google.com" target="_blank">
            Google it (External Link)
          </DropdownMenu.Item>
        </DropdownMenu>
      </div>
      <p>
        If you pass an <code>href</code> the menu item will be rendered as a <code>Link</code>.
        Otherwise if you passed an <code>onClick</code>, the menu item will be rendered as a{" "}
        <code>button</code>.
      </p>
    </Surface>
  );
};

export const ItemDivider = () => {
  return (
    <Surface>
      <DropdownMenu label="Menu">
        <DropdownMenu.Item href="#">Action 1</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 2</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 3</DropdownMenu.Item>
        <DropdownMenu.Divider />
        <DropdownMenu.Item href="#">Action 4</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 5</DropdownMenu.Item>
      </DropdownMenu>
    </Surface>
  );
};

export const Header = () => {
  return (
    <Surface>
      <DropdownMenu label="Menu">
        <DropdownMenu.Header>Export</DropdownMenu.Header>
        <DropdownMenu.Item href="#">Action 1</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 2</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 3</DropdownMenu.Item>
        <DropdownMenu.Divider />
        <DropdownMenu.Header>Preferences</DropdownMenu.Header>
        <DropdownMenu.Item href="#">Action 4</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 5</DropdownMenu.Item>
      </DropdownMenu>
    </Surface>
  );
};
export const CustomLabel = () => {
  return (
    <Surface style={{ maxWidth: "600px" }}>
      <div className="d-flex justify-content-between">
        <h2>Dropdown Menu Example</h2>
        <DropdownMenu
          label={
            <div className="d-flex gap-2 align-items-center">
              <span>Menu</span>
              <BsChevronDown style={{ position: "relative", top: "1px" }} />
            </div>
          }
        >
          <DropdownMenu.Item onClick={() => alert("You clicked the menu item.")}>
            Show Alert
          </DropdownMenu.Item>
          <DropdownMenu.Item href="https://www.google.com" target="_blank">
            Google it (External Link)
          </DropdownMenu.Item>
        </DropdownMenu>
      </div>
      <p>
        The <code>label</code> prop can be a string or a React element.
      </p>
    </Surface>
  );
};

export const CustomClasses = () => {
  return (
    <Surface>
      <DropdownMenu
        label="Menu"
        classNames={{
          button: "text-tan-800 border rounded-1",
          menu: "bg-secondary-200",
        }}
      >
        <DropdownMenu.Item href="#">Action 1</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 2</DropdownMenu.Item>
      </DropdownMenu>
    </Surface>
  );
};

export const MoreMenuWithLabel = () => {
  return (
    <Surface>
      <DropdownMenu
        label={
          <div className="d-flex flex-column align-items-center">
            <BsThreeDots size={24} />
            <span>More</span>
          </div>
        }
      >
        <DropdownMenu.Item href="#">Action 1</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 2</DropdownMenu.Item>
      </DropdownMenu>
    </Surface>
  );
};

export const EllipsesMenu = () => {
  return (
    <Surface>
      <DropdownMenu label={<BsThreeDots size={24} />}>
        <DropdownMenu.Item href="#">Action 1</DropdownMenu.Item>
        <DropdownMenu.Item href="#">Action 2</DropdownMenu.Item>
      </DropdownMenu>
    </Surface>
  );
};

export const FormInDropdown = () => {
  let buttonClasses = "bg-transparent border-0 d-flex align-items-center text-white text-small";
  return (
    <div className="p-4 bg-secondary-800">
      <DropdownMenu classNames={{ button: buttonClasses }} showCaret={true} label="Andrew Petersen">
        <DropdownMenu.Item onClick={() => alert("Fake logging you out")}>Log out</DropdownMenu.Item>
        <DropdownMenu.Divider />
        <DropdownMenu.Header>Impersonating</DropdownMenu.Header>
        <li>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Submitted Impersontation form");
            }}
          >
            <div className="d-flex align-items-center gap-1 px-3 mb-2">
              <Input placeholder="User Email" className="w-auto text-small"></Input>
              <Button color="blue" className="rounded-1">
                <FaArrowRight size={16} />
              </Button>
            </div>
          </form>
        </li>
      </DropdownMenu>
    </div>
  );
};
export default storyConfig;
