import { FormControl } from "@angular/forms";

export interface AsesorForm {
  nombres_asesor: FormControl<string | null>;
  correo_asesor: FormControl<string | null>;
  nro_doc_asesor: FormControl<string | null>;
}
