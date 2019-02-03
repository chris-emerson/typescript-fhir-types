
        import { Attachment } from '../Resource/Attachment';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DiagnosticReport_Media } from '../Resource/DiagnosticReport_Media';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Instant } from '../Scalar/Instant';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum DiagnosticReportStatusKind {
                registered,
partial,
preliminary,
final,
amended,
corrected,
appended,
cancelled,
enteredInError,
unknown
            }

        /**
         * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. 
         */
        export class DiagnosticReport  {

            constructor() {
                this.Code = new CodeableConcept();
            }

            
                /**
                 * This is a DiagnosticReport resource
                 */
                ResourceType: string = 'DiagnosticReport;'
                

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
                 * Identifiers assigned to this report by the performer or other systems.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Details concerning a service requested.
                 */
                BasedOn? : Array<Reference>;
                

                /**
                 * The status of the diagnostic report.
                 */
                Status? : DiagnosticReportStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
                 */
                Category? : CodeableConcept;
                

                /**
                 * A code or name that describes this diagnostic report.
                 */
                Code : CodeableConcept;
                

                /**
                 * The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources.
                 */
                Subject? : Reference;
                

                /**
                 * The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport per is about.
                 */
                Context? : Reference;
                

                /**
                 * The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
                 */
                EffectiveDateTime? : String;
                

                /**
                 * Extensions for effectiveDateTime
                 */
                _effectiveDateTime? : Element;
                

                /**
                 * The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
                 */
                EffectivePeriod? : Period;
                

                /**
                 * The date and time that this version of the report was made available to providers, typically after the report was reviewed and verified.
                 */
                Issued? : Instant;
                

                /**
                 * Extensions for issued
                 */
                _issued? : Element;
                

                /**
                 * The diagnostic service that is responsible for issuing the report.
                 */
                Performer? : Array<Reference>;
                

                /**
                 * The practitioner or organization that is responsible for the report's conclusions and interpretations.
                 */
                ResultsInterpreter? : Array<Reference>;
                

                /**
                 * Details about the specimens on which this diagnostic report is based.
                 */
                Specimen? : Array<Reference>;
                

                /**
                 * [Observations](observation.html)  that are part of this diagnostic report.
                 */
                Result? : Array<Reference>;
                

                /**
                 * One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
                 */
                ImagingStudy? : Array<Reference>;
                

                /**
                 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
                 */
                Media? : Array<DiagnosticReport_Media>;
                

                /**
                 * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
                 */
                Conclusion? : String;
                

                /**
                 * Extensions for conclusion
                 */
                _conclusion? : Element;
                

                /**
                 * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
                 */
                ConclusionCode? : Array<CodeableConcept>;
                

                /**
                 * Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.
                 */
                PresentedForm? : Array<Attachment>;
                
        }
        