import * as menuModel from "@/backend/models/menuModel";
import { menuCreateValidation } from "@/backend/validation/menuValidation";

import { NextResponse } from "next/server";

// Blogs : GET end points
export async function GET(req) {
  let response = {
    message: "Something went wrong!",
    code: 500,
    data: null,
  };

  try {
    response = await menuModel.get_menus();
  } catch (error) {
    response.message = err;
  }

  return NextResponse.json(response, { status: response.code });
}

// Menu : POST end points
export async function POST(req) {
  let response = {
    message: "Something went wrong!",
    code: 500,
    data: null,
  };

  try {
    const body = await req?.json();

    const valid = await menuCreateValidation.safeParseAsync(body);
    // check the validation 
    if (!valid.success) {
      (response.message = valid.error), (response.code = 422);
      return NextResponse.json(response, { status: response.code });
    }

    response = await menuModel.store(body);

  } catch (err) {
    response.message = err;
  }

  return NextResponse.json(response, { status: response.code });
}
