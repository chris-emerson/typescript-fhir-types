
        import { Account_Coverage } from '../Resource/Account_Coverage';
import { Account_Guarantor } from '../Resource/Account_Guarantor';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum AccountStatusKind {
                active,
inactive,
enteredInError,
onHold,
unknown
            }

        /**
         * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. 
         */
        export class Account  {

            constructor() {
                
            }

            
                /**
                 * This is a Account resource
                 */
                ResourceType: string = 'Account;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Indicates whether the account is presently used/usable or not.
                 */
                Status? : AccountStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Categorizes the account for reporting and searching purposes.
                 */
                Type? : CodeableConcept;
                

                /**
                 * Name used for the account when displaying it to humans in reports, etc.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Identifies the patient, device, practitioner, location or other object the account is associated with.
                 */
                Subject? : Array<Reference>;
                

                /**
                 * The date range of services associated with this account.
                 */
                ServicePeriod? : Period;
                

                /**
                 * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.
                 */
                Coverage? : Array<Account_Coverage>;
                

                /**
                 * Indicates the organization, department, etc. with responsibility for the account.
                 */
                Owner? : Reference;
                

                /**
                 * Provides additional information about what the account tracks and how it is used.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Parties financially responsible for the account.
                 */
                Guarantor? : Array<Account_Guarantor>;
                

                /**
                 * Reference to a parent Account.
                 */
                PartOf? : Reference;
                
        }
        