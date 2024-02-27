import * as menuModel from "@/backend/models/menuModel";
import { NextResponse } from "next/server";

// PUT end points
export async function PUT(req, context) {
  let response = {
    message: "Something went wrong!",
    code: 500,
    data: null,
  };

  try {
    const body = await req?.json();

    response = await menuModel.change_status(context?.params.id, body);

  } catch (err) {
    response.message = err;
  }

  return NextResponse.json(response, { status: response.code });
}
