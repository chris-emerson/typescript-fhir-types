
        import { AuditEvent_Detail } from '../Resource/AuditEvent_Detail';
import { Base64Binary } from '../Scalar/Base64Binary';
import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        

        /**
         * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. 
         */
        export class AuditEvent_Entity  {

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
                 * Identifies a specific instance of the entity. The reference should be version specific.
                 */
                What? : Reference;
                

                /**
                 * The type of the object that was involved in this audit event.
                 */
                Type? : Coding;
                

                /**
                 * Code representing the role the entity played in the event being audited.
                 */
                Role? : Coding;
                

                /**
                 * Identifier for the data life-cycle stage for the entity.
                 */
                Lifecycle? : Coding;
                

                /**
                 * Security labels for the identified entity.
                 */
                SecurityLabel? : Array<Coding>;
                

                /**
                 * A name of the entity in the audit event.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Text that describes the entity in more detail.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The query parameters for a query-type entities.
                 */
                Query? : Base64Binary;
                

                /**
                 * Extensions for query
                 */
                _query? : Element;
                

                /**
                 * Tagged value pairs for conveying additional information about the entity.
                 */
                Detail? : Array<AuditEvent_Detail>;
                
        }
        