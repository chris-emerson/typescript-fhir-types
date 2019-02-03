
        import { Bundle_Link } from '../Resource/Bundle_Link';
import { Bundle_Request } from '../Resource/Bundle_Request';
import { Bundle_Response } from '../Resource/Bundle_Response';
import { Bundle_Search } from '../Resource/Bundle_Search';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A container for a collection of resources. 
         */
        export class Bundle_Entry  {

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
                 * A series of links that provide context to this entry.
                 */
                Link? : Array<Bundle_Link>;
                

                /**
                 * The Absolute URL for the resource.  The fullUrl SHALL NOT disagree with the id in the resource - i.e. if the fullUrl is not a urn:uuid, the URL shall be version-independent URL consistent with the Resource.id. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that: 
* fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle)
* Results from operations might involve resources that are not identified.
                 */
                FullUrl? : Uri;
                

                /**
                 * Extensions for fullUrl
                 */
                _fullUrl? : Element;
                

                /**
                 * The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.
                 */
                Resource? : ResourceList;
                

                /**
                 * Information about the search process that lead to the creation of this entry.
                 */
                Search? : Bundle_Search;
                

                /**
                 * Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
                 */
                Request? : Bundle_Request;
                

                /**
                 * Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
                 */
                Response? : Bundle_Response;
                
        }
        