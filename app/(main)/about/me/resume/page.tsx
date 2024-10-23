import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ContactHeader } from "@/components/resume/contact-header"

const Resume = () => {
  return (
    <div className="p-8 container mx-auto py-8 space-y-8 max-w-[1024px]">
      {/* Header */}
      <ContactHeader/>

      {/* Objective */}
      <Card>
        <CardHeader>
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Objective</h2>
        </CardHeader>
        <CardContent>
          <p className="leading-7">
            Experienced Software Engineer looking to solve the hardest problems in edge computing,
            ship the best products, and build the most value.
          </p>
        </CardContent>
      </Card>

      {/* Background and Education Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Background</h2>
          </CardHeader>
          <CardContent>
            <p className="leading-7">
              Experienced software engineer with 6+ years in game development, backend engineering,
              and solution architecture. Strong technical leadership in building and scaling
              high-performance systems, cloud infrastructure, and web platforms. Proven track record
              in developing mission-critical applications. Passionate about tackling complex challenges
              and delivering secure, reliable systems that delight users.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Education</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Bachelor of Arts: Mathematics</h3>
              <p className="text-sm text-muted-foreground">University of Houston, 2015 – 2018</p>
            </div>
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>Learned technology by osmosis in the University of Houston Startup Ecosystem.</li>
              <li>Built a prototype AR Headset, using an Arduino, with a team of two computer scientists and an electrical engineer.</li>
              <li>Double Majored in English Literature.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Experience */}
      <Card>
        <CardHeader>
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Experience</h2>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Center for BrainHealth */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Center for BrainHealth (Emerging Technology) | Lead Software Developer</h3>
              <p className="text-sm text-muted-foreground">Dallas, TX, 2022 – 2024</p>
            </div>
            <ul className="ml-6 list-disc space-y-2 [&>li]:mt-2">
              <li>Led development and deployment of Charisma 1.6-1.9, a live service cloud-streamed game using Unreal Engine and a React client.</li>
              <li>Led development and scaling of BrainHealth Broadcast, a mass texting campaign application, designed with a serverless backend and smoke tested to support 1 million+ subscribers.</li>
              <li>Served as Interim Lead on The BrainHealth Project, built on Next.JS, deployed via CircleCI to AWS Elastic Container Service.</li>
              <li>Optimized multiplayer deployment pipeline using Jenkins, AWS GameLift, and CloudFormation reducing costs by 70%.</li>
              <li>Enhanced web portal, designing and implementing new systems, as well as CMS, video, and game-streaming integrations.</li>
              <li>Implemented Infrastructure as Code practices using AWS CloudFormation for consistent and repeatable deployments.</li>
              <li>Deployed and managed Docker images on AWS Elastic Container Service (ECS) for various backend services.</li>
              <li>Managed and scaled cloud infrastructure to handle high traffic and data volumes.</li>
            </ul>
          </div>

          <Separator />

          {/* RekFix */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">RekFix | Interim CTO</h3>
              <p className="text-sm text-muted-foreground">Houston, TX, 2022</p>
            </div>
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>Architected, developed, and deployed a direct marketing platform and mobile app using AWS Lambda, DynamoDB, and Flutter.</li>
              <li>Designed scalable backend systems to handle millions of user interactions and data points.</li>
            </ul>
          </div>

          <Separator />

          {/* JNA Square */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">JNA Square | Partner and Cofounder</h3>
              <p className="text-sm text-muted-foreground">Houston, TX, 2019 – 2022</p>
            </div>
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>Implemented real-time data processing and analytics systems to handle large volumes of logistics data.</li>
              <li>Developed critical B2B integrations and automations for ERP, TMS, and customer-facing systems.</li>
              <li>Built and maintained high-performance, scalable microservices and REST APIs.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Open Source */}
      <Card>
        <CardHeader>
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Open Source</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Dataworks</h3>
              <a href="https://github.com/acgollapalli/dataworks"
                 className="text-primary hover:underline inline-block mb-2">
                github.com/acgollapalli/dataworks
              </a>
            </div>
            <p className="leading-7">
              Designed and implemented a multi-cloud, distributed-by-default stored-function engine with
              REST API and stream processing capabilities, using Clojure, XTDB, and Kafka. The system
              allowed horizontal scaling of the API, Message Streaming, Database Scaling of an application
              or business environment in a zero-downtime, fault-tolerant way, and updates to business logic,
              API endpoints, and stream processing pipelines by atomically redeploying only that piece of
              logic, stored in XTDB and run by the Dataworks instance.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Skills</h2>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Badge variant="secondary" className="mb-2">Languages</Badge>
                <p className="leading-7">Go, C/C++, C#, TypeScript, Python, SQL, Clojure</p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">Cloud and Infrastructure</Badge>
                <p className="leading-7">AWS (EC2, Lambda, S3, DynamoDB, CloudFormation, ECS, Elastic Beanstalk, Amplify), Azure, Docker, Infrastructure as Code</p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">Communication and Leadership</Badge>
                <p className="leading-7">Communicating with Stakeholders, Leadership and Mentorship of a team, Challenging Up and Supporting Down (Disagree and then Commit), Writing Documentation</p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">LLMs</Badge>
                <p className="leading-7">Anthropic API and OpenAI API (familiar)</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Badge variant="secondary" className="mb-2">Web</Badge>
                <p className="leading-7">React, Next.js, Node.js, REST APIs, GraphQL, SOAP APIs, Microservices</p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">Databases</Badge>
                <p className="leading-7">MySQL, PostgreSQL, Microsoft SQL Server, XTDB</p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">CI/CD and DevOps</Badge>
                <p className="leading-7">Jenkins, CircleCI</p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">Technical Leadership</Badge>
                <p className="leading-7">Gathering Requirements, Assessing and Scoping, Designing Systems, Creating Timelines, Leading Implementations, Debugging Systems, Handling Support Issues, Assessing Costs, Fighting Fires</p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">Other</Badge>
                <p className="leading-7">AI Assisted Programming using Aider in Emacs</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resume;
