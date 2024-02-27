import z from "zod";
import * as commonQueryModel from "@/backend/models/commonQueryModel";

// create menu validation
export const menuCreateValidation = z.object({
  slug: z
    .string({
      required_error: "slug is required",
      invalid_type_error: "slug must be a string",
    })
    .trim()
    .min(1, { message: "slug should be at least 1 chars" })
    .refine(
      async (value) => {
        let menu = await commonQueryModel.data_exist_by_field_except_deleted(
          "menus",
          "slug",
          value
        );

        if (menu.exist) return false;
        else return true;
      },
      {
        message: "Slug already exists",
      }
    ),

  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title must be a string",
    })
    .trim()
    .min(1, { message: "title should be at least 1 chars" })
    .refine(
      async (value) => {
        let menu = await commonQueryModel.data_exist_by_field_except_deleted(
          "menus",
          "title",
          value
        );

        if (menu.exist) return false;
        else return true;
      },
      {
        message: "Title already exists",
      }
    ),

  sequence: z
    .number({
      required_error: "sequence is required",
      invalid_type_error: "sequence must be a number",
    })
    .min(1, { message: "sequence should be at least 1 chars" }),

});

// update menu validation
export const menuUpdateValidation = z.object({
  id: z
    .string({
      required_error: "id is required",
      invalid_type_error: "id must be a string",
    })
    .trim()
    .min(1, { message: "id should be at least 1 chars" })
    .refine(
      async (value) => {
        let menu = await commonQueryModel.data_exist_by_id("menus", value);

        if (menu.exist) return true;
        else return false;
      },
      {
        message: "menu id not found",
      }
    ),

  slug: z
    .string({
      required_error: "slug is required",
      invalid_type_error: "slug must be a string",
    })
    .trim()
    .min(1, { message: "slug should be at least 1 chars" }),

  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title must be a string",
    })
    .trim()
    .min(1, { message: "title should be at least 1 chars" }),

  sequence: z
    .number({
      required_error: "sequence is required",
      invalid_type_error: "sequence must be a number",
    })
    .min(1, { message: "sequence should be at least 1 chars" }),

})
  .refine(
    async (values) => {
      let menu =
        await commonQueryModel.data_exist_by_field_except_id_except_deleted(
          "menus",
          "title",
          values.title,
          values.id
        );

      if (menu.exist) return false;
      else return true;
    },
    {
      message: "Title already exists",
    }
  )
  .refine(
    async (values) => {
      let menu =
        await commonQueryModel.data_exist_by_field_except_id_except_deleted(
          "menus",
          "slug",
          values.slug,
          values.id
        );

      if (menu.exist) return false;
      else return true;
    },
    {
      message: "Slug already exists",
    }
  );