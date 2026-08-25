---
title: "How I use AI for B2B marketing, and why most marketers are still on Level 1"
meta_description: "AI for B2B marketing in 2026: 94% of marketers will use it. The differentiator isn't adoption, it's autonomy. Here's the ladder, and where to climb."
primary_keyword: "AI for B2B marketing"
category: AI
leaf_id: 31
status: published
published_at: 2026-05-04
---

## The honest test most marketers fail

Open ChatGPT or Claude. Scroll up your last ten prompts.

If most of them are questions ("write me a LinkedIn post about X", "rewrite this email", "summarise this transcript"), you're at Level 1. You're using a multi-billion-dollar reasoning engine as a smarter Google. That's how most people are doing AI for B2B marketing right now.

It's somewhat acceptable for an intern. It's not for a seasoned marketer.

The floor is rising fast. HubSpot's 2025 State of Marketing AI report says 94% of marketers plan to use AI in content creation in 2026. 47% for emails, 46% for social copy, 38% for blog posts. Everyone's adopting. Almost nobody is moving up the ladder.

Adoption isn't the moat anymore. Autonomy is.

## The 5 levels of AI autonomy

The cleanest framework I've found comes from the Knight First Amendment Institute. Feng, McDonald and Zhang published "Levels of Autonomy for AI Agents" on [28 July 2025](https://knightcolumbia.org/content/levels-of-autonomy-for-ai-agents-1). There are five levels, ordered by who's actually driving:

- **L1 Operator.** You're in charge. The agent supports on demand. (You ask, it answers.)
- **L2 Collaborator.** You and the agent plan together, delegate, execute in parallel.
- **L3 Consultant.** The agent drives. You consult on direction.
- **L4 Approver.** "The user is only required to interact with the agent when the agent encounters a blocker it cannot resolve on its own."
- **L5 Observer.** "A fully autonomous agent that does not require, and comes with no means for, user involvement."

Translate that into marketing:

- L1: "Write me a cold email."
- L2: You draft the angle, AI drafts the variants, you both refine.
- L3: AI proposes the campaign plan, you greenlight chunks.
- L4: AI runs the workflow end-to-end. You see one thing: the finished asset waiting for approval.
- L5: AI ships. You watch the dashboard.

Most B2B tech marketers I see still live at L1.

## Level 1 is the default, and it's a trap

I've tried to be at the frontier the whole time. Custom GPTs from the early days, n8n flows, Claude Code, Cowork. I've never been stuck at L1, so I'm not going to pretend I had some big conversion moment. The trap I'm describing is what I keep watching other marketers fall into.

The L1 trap isn't that the output is bad. It's that you stop noticing how much of your day is still copy-paste. You're a courier between a chat window and your CMS.

## What Level 4 actually looks like

I've built four advanced systems for my own marketing over the last two months.

**LinkedIn Planner.** Express + SQLite + the Claude API. Five post categories rotate weekly: product marketing, last-week lesson, UX law, story plus marketing lesson, random marketing topic. Each category has its own skill. The system reads the last five approved drafts before writing the next one, so it gets sharper as it runs. Approval triggers automatic infographic generation. I write nothing from scratch. I approve or reject. (More on the why behind the format in [my LinkedIn for B2B founders piece](/blog/linkedin-for-b2b-saas-founders).)

**Blog Pipeline.** Five agents in sequence: brief, research, write, review, interview. I ran it on article 4 ("the do-everything trap") on 24 April 2026. The research agent pulled the ONAH and Sophie story, my Sales Navigator confession, the Peter Thiel single-channel quote, April Dunford on positioning, the ~80% stat on pre-seed traction coming from one channel. The writer produced 1,650 words in one shot. The reviewer caught five craft issues I'd have missed. The interview agent asked me five sharp questions to fill gaps. I approved at every stage. (And yes: this very post you're reading came out of that pipeline. Meta enough. The full architecture is in [how to build a content engine](/blog/how-to-build-a-content-engine).)

**GTM Dashboard.** Started life as a Mistral Le Chat agent for ICP, positioning and messaging. Mid-conversation, the chat suggested a connected flow: customer transcripts feed ICP, ICP feeds positioning, positioning feeds messaging. I took the design to Claude in plan mode and got a Flask app back instead of the cloud-and-Zapier sprawl I was about to commit to. In April, I added multi-brand support: Willow, ZYGO, Kjell Vandevyvere, etc. Assets are composable skills with examples per brand. (The messaging output follows the structure in [how to write a messaging guide](/blog/how-to-write-a-messaging-guide).)

**Personal Marketing Assistant.** Built in 30 minutes on 2 April 2026. Chat UI with access to my Obsidian vault, calendar, client profiles, and the three systems above. Two weeks later, Claude's desktop app shipped features that did roughly what my custom build did, and made it redundant. I retired it. Lesson: build to learn, not to keep.

## When Level 5 makes sense, and when it doesn't

Some things can be fully automated, others can't. I learned the rule the hard way. Last year, I used n8n to automate blog post rewrites for Willow. Their old posts had been outdated, lost rankings, and needed reshaping into a question-answer format which was supposedly better for GEO. I let the automation run. The results came back: just normal. Some better, some worse, mostly still the same. I'm now redoing the same project with a much more advanced approach and more human in the loop. Early results are much more promising with already an increase in clicks and impressions.

That's the lesson in one bad experiment. L5 is a choice with a clean decision rule:

**Volume × damage.** When iteration volume is high and per-iteration damage is low, L5 wins. When either condition flips, you stay at L4.

Where I'd run L5 today:

- **Ad creative automation.** Hundreds of variants a week. One bad ad costs you a few euros and a worse CTR. The system learns from spend data faster than any human approver can.
- **A/B testing at sufficient volume.** Subject lines, headlines, button copy. The damage of a bad variant is bounded by the test split. The volume justifies removing the human.
- **Programmatic SEO at scale.** Templated pages where the cost of one weak page is one weak page.

Where I wouldn't:

- **Cold outreach.** Volume looks high. Damage per message is also high. Each prospect gets one first impression. One tone-deaf message and the relationship is dead before it started. This stays L4 minimum, often L3.
- **Brand-voice content.** LinkedIn posts, blog posts, founder content. Volume is low (one post a day, max). Damage from one off-brand post is high and lingers. The whole point of the channel is voice. L4 with tight approval is the right altitude.
- **Replies to real customers.** Same logic. Low volume, asymmetric damage.

The mistake isn't picking L5. It's picking L5 by default because the tool offers it. Run the volume × damage check before you remove yourself from the loop.

## The bottleneck moved

I wrote this in my weekly note on 20 April: "the future is for those that have the best ideas and the best notes because doing the technical part keeps becoming easier."

That's the shift in one line. Two years ago the bottleneck was execution. Could you ship the page, write the email, build the dashboard? Now the bottleneck is the input. What do you actually know that the model doesn't? What client transcripts have you collected? What real numbers? What angles only you've seen because you've sat in 200 founder calls?

The new moat is first-party material. Notes, transcripts, your CRM, the things you've written down that nobody else has. The model is a multiplier. It multiplies whatever you feed it. Feed it generic prompts and you get generic output. Feed it your client interviews and three years of weekly notes and you get something nobody else can produce.

This is also why the "AI replaces marketers" debate misreads the scoreboard. The role isn't disappearing. It's collapsing into one person. The marketing engineer. The AI engineer marketer. Strategy and execution in the same chair. What used to be "I can tell you what should be done" becomes "I can tell you and ship it by Friday." Specialists still exist for the hard creative or technical edges, but most of what marketers used to delegate, they can now do themselves.

What stays valuable: prioritising what matters, building a personal knowledge base full of your own thinking, having taste. Those are the things AI can't borrow off you.

So here's the hot take: marketers still at L1 right now should be getting worried. Unless you're exceptionally creative, you have no edge anymore. The model can do your job at L1. It can't do your job at L4 plus a knowledge base only you've built.

## What this means for you

You don't need to build four systems. You need one workflow that compounds.

Pick the one with the highest weekly frequency in your job. For most B2B tech founders (fintech, deeptech, HRtech, enterprise finserv, cybersecurity), that's content. For a fractional marketer it might be reporting or campaign briefs. Start there.

Use whatever tool you already pay for. If it's Claude or ChatGPT with a Pro plan, you have everything you need to reach L4. You don't need a separate agent platform. You don't need an automation stack until you've hit the limits of what a single tool plus a prompt can do.

For reference, my current cost of running at L4 across four systems is €100-150/month in API spend, since the start of 2026. Before that, my entire AI stack ran on a ChatGPT subscription plus one or two side tools. Less than €40/month. Claude has made an impact on my wallet. It's still cheap compared to one freelancer hour, and the systems run while I sleep.

Run the workflow for four weeks before you judge it. The L4 systems above all looked clunky in week one. By week three the system was learning from approved outputs and the quality jump was obvious. Most people kill the experiment in week two and conclude AI doesn't work for their use case. They quit before the compounding starts.

## The uncomfortable summary

If your only AI workflow is open chat, ask question, paste answer, you're not behind on AI. You just haven't started.

The marketers pulling ahead this year are the ones who moved up the ladder. L4 is where you stop being the bottleneck. L5 is a tool you reach for when the volume × damage math says yes, and not before.

If you're still operating at L1 in mid-2026, take this seriously: unless your creative edge is genuinely rare, you don't have one. The role is folding into the marketing engineer. Strategy and execution in the same chair. The marketers who climb the ladder this year keep their seat. The ones who stay at L1 are competing with the model on the model's home turf.

Look at your last ten prompts again. Then pick one workflow and climb.
