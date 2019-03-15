
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

export enum Sequence_RepositoryTypeKind {
                directlink = 'directlink',
openapi = 'openapi',
login = 'login',
oauth = 'oauth',
other = 'other'
            }
const Sequence_RepositoryTypeKindKeys = t.keyof({
                [Sequence_RepositoryTypeKind.directlink]: null,
[Sequence_RepositoryTypeKind.openapi]: null,
[Sequence_RepositoryTypeKind.login]: null,
[Sequence_RepositoryTypeKind.oauth]: null,
[Sequence_RepositoryTypeKind.other]: null
            });


            export interface ISequence_Repository {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
                     */
                    type? : Sequence_RepositoryTypeKind;
                    

                    /**
                     * Extensions for type
                     */
                    _type? : IElement;
                    

                    /**
                     * URI of an external repository which contains further details about the genetics data.
                     */
                    url? : string;
                    

                    /**
                     * Extensions for url
                     */
                    _url? : IElement;
                    

                    /**
                     * URI of an external repository which contains further details about the genetics data.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
                     */
                    datasetId? : string;
                    

                    /**
                     * Extensions for datasetId
                     */
                    _datasetId? : IElement;
                    

                    /**
                     * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
                     */
                    variantsetId? : string;
                    

                    /**
                     * Extensions for variantsetId
                     */
                    _variantsetId? : IElement;
                    

                    /**
                     * Id of the read in this external repository.
                     */
                    readsetId? : string;
                    

                    /**
                     * Extensions for readsetId
                     */
                    _readsetId? : IElement;
                    
            }
        


        export const RTTI_Sequence_Repository: t.Type<ISequence_Repository> = t.recursion( 'ISequence_Repository', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: Sequence_RepositoryTypeKindKeys,
_type: RTTI_Element,
url: t.string,
_url: RTTI_Element,
name: t.string,
_name: RTTI_Element,
datasetId: t.string,
_datasetId: RTTI_Element,
variantsetId: t.string,
_variantsetId: RTTI_Element,
readsetId: t.string,
_readsetId: RTTI_Element
        })
        
        );
        

        