
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Extension } from '../Resource/Extension';
import { MedicinalProductIngredient_Strength } from '../Resource/MedicinalProductIngredient_Strength';

        

        /**
         * An ingredient of a manufactured item or pharmaceutical product. 
         */
        export class MedicinalProductIngredient_SpecifiedSubstance  {

            constructor() {
                this.Code = new CodeableConcept();
this.Group = new CodeableConcept();
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * The specified substance.
                 */
                Code : CodeableConcept;
                

                /**
                 * The group of specified substance, e.g. group 1 to 4.
                 */
                Group : CodeableConcept;
                

                /**
                 * Confidentiality level of the specified substance as the ingredient.
                 */
                Confidentiality? : CodeableConcept;
                

                /**
                 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
                 */
                Strength? : Array<MedicinalProductIngredient_Strength>;
                
        }
        