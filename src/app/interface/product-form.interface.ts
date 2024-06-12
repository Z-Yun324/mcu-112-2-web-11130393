import { FormControl } from '@angular/forms';

export interface IProductFrom {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  company: FormControl<string | null>;
  isShow: FormControl<boolean>;
  price: FormControl<string | null>;
}