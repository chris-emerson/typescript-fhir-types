
        import { AdverseEvent_Causality } from '../Resource/AdverseEvent_Causality';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        

        /**
         * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. 
         */
        export class AdverseEvent_SuspectEntity  {

            constructor() {
                this.Instance = new Reference();
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
                 * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
                 */
                Instance : Reference;
                

                /**
                 * Information on the possible cause of the event.
                 */
                Causality? : Array<AdverseEvent_Causality>;
                
        }
        