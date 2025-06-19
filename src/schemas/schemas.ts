import { z } from "zod/v4";

type FieldError = {
    errors: string[];
};

/*--- Product ---*/
export const ProductSchema = z.object({
    id: z.number().int(),
    img: z.url(),
    name: z.string().min(1),
    brand: z.string().min(1),
    category: z.string().min(1),
    color: z.string().min(1),
    price: z.number().min(0),
    stock: z.number().int().min(0),
    popularity: z.number().int().min(0).max(100),
    discount: z.number().int().min(0).max(100).optional(),
    shortDescription: z.string().min(1),
    longDescription: z.string().min(1),
});

export const ProductListSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
export type ProductList = z.infer<typeof ProductListSchema>;

/*--- FAQ ---*/
export const FAQSectionSchema = z.object({
    id: z.string().min(1),
    subtitle: z.string().min(1),
    body: z.string().min(1),
});

export const FAQSchema = z.object({
    id: z.string().min(1),
    headline: z.string().min(1),
    subheading: z.string().min(1),
    sections: z.array(FAQSectionSchema),
});

export type FAQType = z.infer<typeof FAQSchema>;
export type FAQSectionType = z.infer<typeof FAQSectionSchema>;

/*--- About ---*/
export const AboutSectionSchema = z.object({
    img: z.string().min(1),
    id: z.string().min(1),
    title: z.string().min(1),
    subtitle: z.string().min(1),
    body: z.string().min(1),
});

export const AboutListSchema = z.array(AboutSectionSchema);

export type AboutType = z.infer<typeof AboutListSchema>;
export type AboutSectionType = z.infer<typeof AboutSectionSchema>;

/*--- Contact ---*/

export const ContactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email(),
    subject: z.string().min(1, "subject is required"),
    message: z.string().min(1, "Message is required"),
});

export type Contact = z.infer<typeof ContactSchema>;

export type ContactErrors = {
    name?: FieldError;
    email?: FieldError;
    subject?: FieldError;
    message?: FieldError;
};

/*--- Newsletter ---*/

export const NewsletterSchema = z.object({
    email: z.email(),
});

export type Newsletter = z.infer<typeof NewsletterSchema>;

export type NewsletterErrors = {
    email?: FieldError;
};

/*--- User ---*/

const MIN_PASSWORD_LENGTH = 3;
const PASSWORD_REGEX = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{${MIN_PASSWORD_LENGTH},}$`
);

export const UserSchema = z.object({
    name: z.string().min(1, "Name is required"),
    address: z.string().min(1, "Adress is required"),
    adress2: z.string().optional(),
    zip: z
        .number()
        .min(4, "Please provide a valid zipcode")
        .max(4, "Please provide a valid zipcode"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1).optional(),
    phone: z.number().min(1).optional(),
    email: z.email(),
    password: z.string().regex(PASSWORD_REGEX, {
        error: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long, and include at least one uppercase letter, one lowercase letter, and one number.`,
    }),
    password2: z.string().regex(PASSWORD_REGEX),
    terms: z.boolean(),
    marketing: z.boolean().optional()
}).refine((values) => {
    values.password === values.password2, {
        message: "Passwords dont match",
        path: ['password2']
    }
})

export type User = z.infer<typeof UserSchema>;

export type SignupErrors = {
    name?: FieldError;
    adress?: FieldError;
    zip?: FieldError;
    city?: FieldError;
    email?: FieldError;
    password?: FieldError;
    password2?: FieldError;
    terms: FieldError;
};