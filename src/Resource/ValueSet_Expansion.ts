
        import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Integer } from '../Scalar/Integer';
import { Uri } from '../Scalar/Uri';
import { ValueSet_Contains } from '../Resource/ValueSet_Contains';
import { ValueSet_Parameter } from '../Resource/ValueSet_Parameter';

        

        /**
         * A ValueSet resource instances specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). 
         */
        export class ValueSet_Expansion  {

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
                 * An identifier that uniquely identifies this expansion of the valueset, based on a unique combination of the provided parameters, the system default parameters, and the underlying system code system versions etc. Systems may re-use the same identifier as long as those factors remain the same, and the expansion is the same, but are not required to do so. This is a business identifier.
                 */
                identifier? : Uri;
                

                /**
                 * Extensions for identifier
                 */
                _identifier? : Element;
                

                /**
                 * The time at which the expansion was produced by the expanding system.
                 */
                timestamp? : DateTime;
                

                /**
                 * Extensions for timestamp
                 */
                _timestamp? : Element;
                

                /**
                 * The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.
                 */
                total? : Integer;
                

                /**
                 * Extensions for total
                 */
                _total? : Element;
                

                /**
                 * If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL NOT be present.
                 */
                offset? : Integer;
                

                /**
                 * Extensions for offset
                 */
                _offset? : Element;
                

                /**
                 * A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
                 */
                parameter? : ValueSet_Parameter[];
                

                /**
                 * The codes that are contained in the value set expansion.
                 */
                contains? : ValueSet_Contains[];
                
        }
        