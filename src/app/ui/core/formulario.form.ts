import { FormGroup } from "@angular/forms";
import { InversionForm } from "./inversion.form";
import { AsesorForm } from "./asesor.form";

export interface FormularioForm{
    inversion: FormGroup<InversionForm>;
    asesor: FormGroup<AsesorForm>
}