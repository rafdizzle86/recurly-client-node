/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

/**
 * Item
 * @typedef {Object} Item
 * @prop {string} accountingCode - Accounting code for invoice line items. If no value is provided, it defaults to item's code.
 * @prop {string} code - Unique code to identify the item.
 * @prop {datetime} createdAt - Created at
 * @prop {Array.<CustomField>} customFields
 * @prop {datetime} deletedAt - Deleted at
 * @prop {string} description - Optional, description.
 * @prop {string} id - Item ID
 * @prop {string} name - This name describes your item and will appear on the subscriber's invoice when it's purchased on a one time basis.
 * @prop {string} pricingType - Pricing type
 * @prop {string} revenueScheduleType - Revenue schedule type
 * @prop {string} sku - Optional, stock keeping unit to link item to other inventory systems.
 * @prop {string} state - The current state of the item.
 * @prop {string} taxCode - Used by Avalara, Vertex, and Recurly’s EU VAT tax feature. The tax code values are specific to each tax system. If you are using Recurly’s EU VAT feature you can use `unknown`, `physical`, or `digital`.
 * @prop {boolean} taxExempt - `true` exempts tax on the item, `false` applies tax on the item.
 * @prop {datetime} updatedAt - Last updated at
 * @prop {string} usageType - Usage type
 */
class Item {}

module.exports = Item
