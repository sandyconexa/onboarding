import { FormControl } from '@angular/forms';

export interface InversionForm {
  monto_inversion: FormControl<number | null>;
  modalidad_inversion: FormControl<number | null>;
  plazo_inversion: FormControl<number | null>;
  frecuencia_inversion: FormControl<number | null>;
  moneda_inversion: FormControl<number | null>;
  tipo_participe: FormControl<number | null>
}
