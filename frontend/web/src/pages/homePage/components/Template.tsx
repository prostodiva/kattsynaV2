import Flexbox from '@/pages/homePage/components/Flexbox.tsx';
import Card from '@/components/ui/Card.tsx';
import Form from '@/components/ui/Form.tsx';

function Template(){
  return (
    <div className="m-10">
      <Flexbox />

      <p className="prose prose-xl">
        Headline: How much is unreliable full-stack development costing your
        business? Introductory Text: Hiring an engineer without a deep
        understanding of the full software lifecycle (end-to-end) can pose a
        direct threat to your product. Are you experiencing any of these
        problems? Does your application struggle under high traffic? Without
        proper automated testing, systems often fail to remain reliable and
        scalable when it matters most. Are users dropping off due to critical
        bugs? Unresolved UI and logic issues can damage user experience and
        cause customers to abandon onboarding flows. Is your team slowed down by
        messy or inconsistent code? A lack of structure and engineering best
        practices reduces productivity and makes collaboration harder.
        Full-cycle software mistakes cost companies dearly. Don’t put your
        product at risk - hire a full-stack software engineer who writes clean,
        secure code from day one and takes ownership across the entire
        development lifecycle.
      </p>

      <div className="flex justify-center">
        <Form />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-6 p-4 mx-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
export default Template;