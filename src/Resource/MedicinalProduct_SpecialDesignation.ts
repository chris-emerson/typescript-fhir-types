
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';

        

        /**
         * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). 
         */
        export class MedicinalProduct_SpecialDesignation  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Identifier for the designation, or procedure number.
                 */
                identifier? : Identifier[];
                

                /**
                 * The intended use of the product, e.g. prevention, treatment.
                 */
                intendedUse? : CodeableConcept;
                

                /**
                 * Condition for which the medicinal use applies.
                 */
                indication? : CodeableConcept;
                

                /**
                 * For example granted, pending, expired or withdrawn.
                 */
                status? : CodeableConcept;
                

                /**
                 * Date when the designation was granted.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * Animal species for which this applies.
                 */
                species? : CodeableConcept;
                
        }
        