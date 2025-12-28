import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollection =connect('feedbacks')
export async function GET(request, {params}){

const {id} = await params;
if(id.length != 24){
    return Response.json({
        status:400,
        message:'send correct _id'
    })
}
const query = {_id: new ObjectId(id)}
const result =await feedbackCollection.findOne(query)

return Response.json(result)


}

export async function DELETE(request,{params}){

const {id}= await params;
if(id.length != 24){
    return Response.json({
        status:400,
        message:'select correct _id'
    })


}

const query = {_id:new ObjectId(id)};
const result = await feedbackCollection.deleteOne(query)
return Response.json(result)

}

export async function PATCH(request,{params}){
    const {id} = await params;
    const {message}=await request.json();
    console.log('message is',message)
    if(id.length !=24){
return Response.json({
    status:400,
    message: 'send a valid id'
})
    }
    const query = {_id: new ObjectId(id)}
    const newData = {
        $set:{
            message, updatedAt: new Date()
        }
    }
    const result = await feedbackCollection.updateOne(query, newData)
    return Response.json(result)
}