import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function DropdownMenuComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="link" className="flex items-end">
          Inicio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a href="#servicios">Servicios</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#producto">Sensor SIMAP</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#cotizaciones">Cotización</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#mision">Misión y Visión</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
