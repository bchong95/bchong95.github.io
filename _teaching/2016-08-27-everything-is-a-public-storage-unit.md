---
layout: sublime
title: Everything Is A Public Storage Unit
permalink: everything_is_a_public_storgae_unit
---
## ELI5

When I am interviewing candidates to be on course staff I always ask them to take their favorite topic in systems and explain it to me like I am a 5 year old. This might seem a little odd, but there is an [entire subreddit](https://www.reddit.com/r/explainlikeimfive/) dedicated to this. In fact I think the ability to explain a tough concept and present it in a manner that a 5 year old could understand it is key to being a good teacher. I have seen candidates approach this in one of two ways and both are equally valid. The first approach is to take that concept and explain it in great detail making sure to provide all the backstory and moving at a pace that your audience can comfortably follow. The second approach is to take that concept then try and relate it to something your audience already intuitively knows. Both of these approaches are doing the same thing: trying to abstract away complicated details until your audience has a firm enough mental model of the concept to understand the subtle details.

## Showers Thought -> PSU

So I was in the shower wondering What would I do if I was given the ELI5 interview question?. So I decided that I would probably pick the only topic in systems that I actually care about, which is Fixed Sized Buffers: Don't Use Them. Every semester I see students using fixed sized buffers and never even giving it a second thought. I cringe whenever I see this, because one day these kids will write hospital software and use a fixed sized buffer for hospital logs. They will create an array big enough for one million logs and sleep happily over that. They make the assumption that there will never be more than a million logs in a single day. But one day in the future the world population will increase and there will be an epidemic. When that times comes you will be laying in a hospital bed and get a heart attack. That heart attack will be log one million and one and the system will try to write that into a buffer: segfault and you die of a heart attack.

So I stood in the shower and thought to myself Okay what I am trying to teach is how to use memory and that what you are storing can grow over time. So I was thinking What do everyday people use to store things?. Eventually I converged on public storage units. I got out of the shower and started asking my mom questions about public storage units. The remainder of this post is a transcript of that conversation.

## Vector

Me: Mom supposed you had a public storage unit that could only fit ten things and you wanted to fit an eleventh thing
Mom: Okay.
Me: What would you do?
Mom: Well I would look through those ten things and see if I could get rid of one of them to make room for the eleventh thing.
Me to myself: Mhmmm. So you are talking about a fixed sized buffer with some kind of eviction policy.
Me: Suppose you had to keep all eleven things, then what would you do?
Mom: Well I guess I would have to rent a bigger storage unit and move all of my stuff over.
Me to myself: EXACTLY!!! this is equivalent to mallocing an array twice as big, copying all the data over, and updating the reference to the array.
Mom: What else would you do?
Me: Some people will do a 'buffer overflow' which is the equivalent of putting your stuff in someone else's public storage unit.

## Linked List

Me: Okay mom, just bare with me for a second.
Mom: Okay??....
Me: Suppose you were renting storage units and instead of writing down a list of all the ones you owned on a sheet of paper you instead left a note in every storage unit with the address of the next storage unit.
Mom: By "address" do you mean I can just punch it into my GPS and drive over there?
Me: Yep! We call that "dereferencing a pointer" in programming.
Mom: Okay I think I get the setup, but I would never do it like that.
Me: What would you do?
Mom: I would have an address book where I remember the address of every storage unit that I own and the contents of the storage unit.
Me: Okay we call that a dictionary in programming, but I think it's a little too advanced for the current analogy.
Mom: Okay, so what did you want me to do with these storage units that are linked up in this fashion?
Me to myself: Wow even the naming is intuitive.
Me: Okay mom, suppose I pointed to a storage unit and asked you "Do you own this storage unit?" how would you confirm or deny?
* This is me asking her to come up with an algorithm for searching through a linked list*
Mom: Well it depends.
Me: Depends?!?!?! On what?
Mom: Well I would need to know where my first storage unit is.
Me to myself: WOW!!!! My mom has intuitively come to the conclusion that she needs a reference to head of the linked list to even begin iterating through it.
Me: Okay suppose I took you to the first storage unit. What would you do?
Mom: Well either that first storage unit is the storage unit that I am looking for or it's not. If it is then yeah I own the storage unit in question.
Me: If it's not?
Mom: Well I would look at the note I left myself and go to the next storage unit and we are back to the same scenario.
Me to myself: She's intuitively come to the conclusion that the linked list is recursive in nature and she is using recursion to reduce the problem to a subproblem. Nice!
Me: Okay that will tell you "yes you own the storage unit." if you actually did, but how would you know if you didn't own the storage unit.?
Mom: Well when I get to the last storage unit and I still haven't found the storage unit in question.
Me: How would you know that you are at the last storage unit.
Mom: Well that part is ambiguous, since you haven't told me what I do with my last storage unit, but I presume I would either have a note saying it is the last one or I would already know how many storage units I own.
Me to myself: Nice. She as intuitively discovered that in order to traverse through dynamic memory you need to either know the length ahead of schedule or have some kind of terminating symbol.
Me: Okay nice. Now suppose you got a new storage unit, "How would you add it to this bookkeeping system?"
Mom: Do I know where the last storage unit is?
Me: Sure what would you do?
Mom: I would go to the last storage unit and leave a note telling me where this new storage unit is
Me: Okay what if you didn't know where the last storage unit was?
Mom: Hmm I could just go find the last storage unit with the methods we just talked about and then do the thing where I add a note.
Me to myself: Nice! She reduced to problem to something she already knew.
Me: Okay suppose I only told you where the first storage unit was "is there a way to add the new storage unit to bookkeeping without visiting all the existing units?"
Mom: Hmm ... Well I guess if the ordering didn't matter I could just take that new storage unit and leave a note telling me where my first storage unit was.
Me to myself: Okay she has figured out appending to the head of a linked list in O(1) time.
Me: But what if I wanted to come back to that storage unit? I can't go backwards from the first storage unit
Mom: Oh I guess you would have to just say that the new storage unit is the new first storage unit.
Me to myself: Good she is updating her head pointer.
Me: Okay now what if I pointed to a storage unit and said "that storage unit is no longer yours", then how would you remove it from your bookkeeping?
Mom: Hmm ... do I know the where the storage unit right before is?
Me: Sure.
Mom: Well I would update the note in the previous storage unit.
Me: To what?
Mom: To the location of the storage unit that comes right after the one I have to remove.
Me: How do you know that works?
Mom: It's like you are skipping over the storage unit you had to remove.
Me: Nice!
Me: Okay what if you didn't know where the previous one is
Mom: Same trick: if I didn't know where one of my storage units were, then I would just look for it.

At this point I decided that my Mom should have gone into computer science instead of me :)

Maybe the next time I go back home I will ask her to do other operations like reversing the linked list or reversing subsections.

## Malloc

I decided to take the analogy just a little further

Me: Ok Mom. Suppose now instead of renting storage units you are the person renting out storage units.
Mom: Ok so I am the landlord now.
Me: Yep. Here are the extra conditions. I want you to imagine that you have a bunch of heterogeneous storage units (they are not necessarily all the same size), they are measured by how many boxes they can store (all the boxes are the same size) and the storage units are adjacent to each other in a single file line. Oh it's also a free service and the only restrictions is that doing the job quickly and saving space makes your manager happy :)
Mom: Okay I get that.
Me: Okay now suppose someone walked up to you and said I need a storage unit that can fit 23 boxes, then what storage unit would you give them.
Mom: Well an available one that can at least store 23 boxes.
Me: Any other restrictions?
Mom: Well it depends.
Me: On?
Mom: Well you have to give them an available unit otherwise they would be putting there stuff in someone else's unit and it has to at least be large enough for the things they want.
Me: Would you ever want to give them a larger storage unit than requested?
Mom: Maybe that's what I have laying around. If that's the case, then it's really easy to just give them that. Also if I give them a storage unit that is exactly the size they need right now, then they might need to store 24 boxes in the future and then they have to move all their stuff into a new storage unit later.
Me to myself: There is some nice space vs time analysis here.
Me: Okay now suppose you had someone come up to you and said I need a storage unit that can store 100 boxes and you simply don't have a storage unit big enough, what would you do?
Mom: Well I could just build a storage unit right next to my existing lot that is big enough.
Me to myself: Okay that is equivalent to calling sbrk() and extending your heap.
Me: Okay what if I added the restriction that you couldn't build a new storage unit.
Mom: Hmm ... I guess I could give them two smaller storage units and they can split their stuff ...
Me: You don't seem to like that solution???
Mom: Yeah because now their stuff is in two places.
Me: Okay what would you do if all the stuff had to be in one place?
Mom: Oh! I could look for some smaller storage units that are right next to each other and tear down the dividers!
Me: Yep we call that coalescing free blocks.
Me: Okay now what if someone wanted a storage unit big enough to store 10 things, but all you had was a storage unit big enough to to fit 100 things?
Mom: Oh I would put a divider there and someone else could rent out the remainder of the storage unit.

My mom figured out a naive memory allocator without ever taking a system programming class. All she needed was a tangible example.

## Datastructures are PSU

After this conversation I realized that all datastructures could be explained through public storage units. Stacks and Queues are just arrays or linked lists with ordering. Graphs are just public storage units with notes leading to other public storage units. A hashtable is just a public storage unit with an intricate why of placing things in them. But what I learned from this was that there is power in using relatable analogies. When someone is learning something new it helps to abstract away a lot of complicated details. Once you have built your audiences intuition of the problem then and only then should you complicate the problem with edge cases and formalisms. Friendly analogies also lend well to the socratic method, since it allows your audience to answer questions in a familiar environment. Notice that in my conversation with my mom I almost always was asking a question. These questions give your audience something to think about. You can also use them to guide your audience to the concepts you are trying to teach instead of just telling them. There is value in presenting your audience with a problem and having them solve it. If you just gave them the solution they might not even understand why it was a problem in the first place and at the very least it is giving them more appreciation for the solution. I think the main takeaway for instructors is that something very formal and sterile like datastructures doesn't have to be difficult; sometimes you just have to motivate the problem.
