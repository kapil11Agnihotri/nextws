import { v4 as uuidv4 } from "uuid";

import { query } from "@/backend/config/db";
import { getCurrentDateTime } from "@/backend/helpers/commonHelper";

//Function to get menus list
export const get_menus = async () => {
  let message = 'Something went wrong', code = 500, data = [];

  try {
    const menus = await query(
      `SELECT * FROM menus WHERE is_deleted = ? AND parent_id IS NULL ORDER BY sequence`, [0]
    );

    if (menus.length) {
      for (let menu of menus) {
        const submenu = await query(`SELECT * FROM menus WHERE parent_id = ?`, [menu.id]);
        menu.submenus = submenu;
      }
    }

    message = "No menus found", code = 200, data = [];

    if (menus.length) {
      message = "Menus list fetched successfully";
      code = 200;
      data = menus;
    }

  } catch (error) {
    message = error;
  }

  return { message, code, data };
}

//Function to get active menus list
export const get_active_menus_list = async () => {
  let message = 'Something went wrong', code = 500, data = [];

  try {
    const menus = await query(
      `SELECT * FROM menus WHERE is_deleted = ? ORDER BY sequence`, [0]
    );

    message = "No menus found", code = 404, data = [];
    if (menus.length) {
      message = "Menus list fetched successfully";
      code = 200;
      data = menus;
    }

  } catch (error) {
    message = error;
  }

  return { message, code, data };
}

//Function to get menus by id
export const get_menus_by_id = async (id) => {
  let message = 'Something went wrong', code = 500, data = [];

  try {
    const menus = await query(
      `SELECT * FROM menus WHERE id = ? AND is_deleted = ?`, [id, 0]
    );

    message = "No menus found", code = 404, data = [];

    if (menus.length) {
      message = "Menus fetched successfully";
      code = 200;
      data = menus[0];
    }

  } catch (error) {
    message = error;
  }

  return { message, code, data };
}

export const get_menus_by_name = async (name) => {
  const menus = await db.query(
    `SELECT * FROM menus WHERE title = ? AND is_deleted = ?`, [name, 0]
  );

  return menus[0];
}

//Function to create menus
export const store = async (req) => {
  let message = 'Something went wrong', code = 500, data = [];

  try {
    const uuid = uuidv4();
    const parent_id = req.parent_id ?? null;
    const is_active = req.is_active ?? 0;
    const description = req.description ?? null;
    const sequence = req.sequence ?? null;
    const menu_for = req.menu_for ?? null;
    const created_at = getCurrentDateTime();

    const result = await query(
      `INSERT INTO menus(id, parent_id, title, slug, menu_for, description, sequence, is_active, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)`, [uuid, parent_id, req?.title, req?.slug, menu_for, description, sequence, is_active, created_at, created_at]
    );

    message = 'Error in creating menus', code = 400, data = {};

    if (result.affectedRows) {
      result.insertId = uuid;
      message = 'Menu created successfully';
      data = result;
      code = 201
    }

  } catch (error) {
    message = error;
  }

  return { message, data, code };
}

//Function to update menus
export const update = async (id, req, file) => {
  let message = 'Something went wrong', code = 500, data = [];

  try {
    const created_at = getCurrentDateTime();
    const parent_id = req.parent_id ?? null;
    const is_active = req.is_active ?? 0;
    const description = req.description ?? null;
    const sequence = req.sequence ?? null;
    const menu_for = req.menu_for ?? null;

    const result = await query(
      `UPDATE menus SET parent_id = ?, title = ?, slug = ?, menu_for = ?, description = ?, sequence = ?, is_active = ?, updated_at = ? WHERE id = ?`, [parent_id, req?.title, req?.slug, menu_for, description, sequence, is_active, created_at, id]
    );

    message = 'Error in updating menus', code = 400, data = {};

    if (result.affectedRows) {
      message = 'Menu updated successfully';
      data = result;
      code = 200
    }

  } catch (error) {
    message = error;
  }

  return { message, data, code };
}

//Function to delete menus
export const delete_menu = async (id) => {
  let message = 'Something went wrong', code = 500, data = [];

  try {
    const result = await query(
      `UPDATE menus set is_deleted = ? WHERE id = ?`, [1, id]
    );

    message = 'Error in deleting menus', code = 400, data = [];

    if (result) {
      message = 'Menu deleted successfully';
      code = 200;
    }

  } catch (error) {
    message = error;
  }

  return { message, data, code };
}

//Function to changes status
export const change_status = async (id, params) => {
  let message = 'Something went wrong', code = 500, data = [];

  try {
    const updated_at = getCurrentDateTime();
    let status_code;
    let status;

    if (params.status == 0) {
      status_code = 0;
      status = "Deactive";
    } else if (params.status == 1) {
      status_code = 1;
      status = "Active";
    } else {
      message = 'Please enter valid status code';
      code = 400;
      return { message, code };
    }

    const result = await query(
      `UPDATE menus SET status='${status_code}',updated_at='${updated_at}' WHERE id='${id}'`
    );

    message = 'Error in changing menu status', code = 400, data = [];

    if (result.affectedRows) {
      message = `Menu status chnaged to ${status}`;
      status = `${status}`;
      data = result;
      code = 200;
    }

  } catch (error) {
    message = error;
  }

  return { message, data, status, code };
}