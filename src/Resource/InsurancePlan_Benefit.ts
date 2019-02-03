
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { InsurancePlan_Limit } from '../Resource/InsurancePlan_Limit';

        

        /**
         * Details of a Health Insurance product/plan provided by an organization. 
         */
        export class InsurancePlan_Benefit  {

            constructor() {
                this.Type = new CodeableConcept();
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
                 * Type of benefit (primary care; speciality care; inpatient; outpatient).
                 */
                Type : CodeableConcept;
                

                /**
                 * The referral requirements to have access/coverage for this benefit.
                 */
                Requirement? : String;
                

                /**
                 * Extensions for requirement
                 */
                _requirement? : Element;
                

                /**
                 * The specific limits on the benefit.
                 */
                Limit? : Array<InsurancePlan_Limit>;
                
        }
        