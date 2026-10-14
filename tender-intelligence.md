# Tender Intelligence opportunity workflows

A platform for tender discovery, qualification, team coordination and opportunity tracking.

**Scope:** Deployed interface, help-centre, access and service-recovery improvements.

## The problem

Opportunity teams need to move from source material to a reviewed decision while preserving ownership, access controls and clear stage progression.

## Architecture and leadership contribution

- Contributed to opportunity stages, team workflows, data-source integration and operational views.
- Directed a consistent interface refresh and workflow-oriented, searchable help centre.
- Supported identity-provider integration and application-role verification.
- Diagnosed service availability and strengthened restart behavior after an infrastructure restart.

## Architecture decisions

**Human review remains explicit.** Extracted information supports qualification; uncertain dates, quantities and eligibility require source verification.

**Identity and authorization are distinct.** Successful SSO must be followed by the correct application membership and role.

**Measure the whole user path.** Frontend, backend and supporting services have independent failure modes. Backend health alone does not establish user access.

## Delivery and outcome

The refreshed frontend and contextual help were deployed. Access provisioning was verified across identity and application state. Service recovery addressed a frontend restart gap and was checked through application and backend health. Internal approval is not represented as submission to an external tender portal.

## Platform landscape

Enterprise APIs, data services, containers, identity integration and document-processing workflows.

[Back to portfolio](README.md)
