
        import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        export enum Composition_AttesterModeKind {
                personal,
professional,
legal,
official
            }

        /**
         * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.). 
         */
        export class Composition_Attester  {

            constructor() {
                
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
                 * The type of attestation the authenticator offers.
                 */
                Mode? : Composition_AttesterModeKind;
                

                /**
                 * Extensions for mode
                 */
                _mode? : Element;
                

                /**
                 * When the composition was attested by the party.
                 */
                Time? : DateTime;
                

                /**
                 * Extensions for time
                 */
                _time? : Element;
                

                /**
                 * Who attested the composition in the specified way.
                 */
                Party? : Reference;
                
        }
        