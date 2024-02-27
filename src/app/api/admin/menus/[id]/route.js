import * as menuModel from "@/backend/models/menuModel";
import { menuUpdateValidation } from "@/backend/validation/menuValidation";

import { NextResponse } from "next/server";

// GET end points
export async function GET(req, context) {
  let response = {
    message: "Something went wrong!",
    code: 500,
    data: null,
  };

  try {
    response = await menuModel.get_menus_by_id(context?.params.id);
  } catch (error) {
    response.message = err;
  }

  return NextResponse.json(response, { status: response.code });
}

// PUT end points
export async function PUT(req, context) {
  let response = {
    message: "Something went wrong!",
    code: 500,
    data: null,
  };

  try {
    const id = context?.params.id;
    const body = await req?.json();
    body.id = id;

    const valid = await menuUpdateValidation.safeParseAsync(body);
    // check the validation
    if (!valid.success) {
      (response.message = valid.error), (response.code = 422);
      return NextResponse.json(response, { status: response.code });
    }

    response = await menuModel.update(id, body);

  } catch (err) {
    response.message = err;
  }

  return NextResponse.json(response, { status: response.code });
}

// DELETE End point
export async function DELETE(req, context) {
  let response = {
    message: "Something went wrong!",
    code: 500,
    data: null,
  };

  try {
    response = await menuModel.delete_menu(context?.params.id);
  } catch (err) {
    response.message = err;
  }

  return NextResponse.json(response, { status: response.code });
}
