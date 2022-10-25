import { getClient, sanityClient, usePreviewSubscription } from "../../sanity";
import React from "react";
import PortableText from "react-portable-text";
import Nav from "../../src/componants/Header/nav";
import Contactform from "../../src/componants/Contact";
function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

function Policys({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.policy,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  const policy = filterDataToSingleItem(previewData, preview);

  return (
    <>
      <div className=" flex items-center   justify-center w-full  overflow-hidden px-4 bg-[#303030]  ">
        <div className=" w-full z-30   h-full ">
          <Nav />
          <main className=" mx-auto   text-white ">
            {/* {preview && <Link href="/api/exit-preview">Preview Mode Activated!</Link>} */}
            <article className=" justify-center font-inter text-2xl lg:text-7xl  ">
              <div className="flex justify-center  text-6xl py-8  font-bold">
                {policy?.title && <h1>{policy.title}</h1>}
              </div>

              <PortableText
                className=" container "
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={policy?.body}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-6xl font-bold my-5" {...props} />
                  ),
                  h2: (props: any) => (
                    <h2 className="text-4xl font-bold my-5" {...props} />
                  ),
                  h3: (props: any) => (
                    <h2 className="text-3xl font-bold my-5" {...props} />
                  ),
                  li: ({ children }: any) => (
                    <li className="ml-4 list-disc"> {children} </li>
                  ),
                  link: ({ href, children }: any) => (
                    <a href={href} className="text-blue-400 hover:underline">
                      {children}
                    </a>
                  ),
                }}
              />
            </article>
            <div id="5">
              {" "}
              <Contactform />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Policys;

export const getStaticPaths = async () => {
  const query = `*[_type == "policy"]{
    _id,
    slug {
        current
    }
}`;

  const policys = await sanityClient.fetch(query);

  const paths = policys.map((policy) => ({
    params: {
      slug: policy.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params, preview = false }) => {
  const query = `*[_type == "policy" && slug.current == $slug]{
 _id,

 title,
 body,
 slug,

}`;

  const queryParams = { slug: params.slug };

  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const policy = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { policy, query, queryParams },
    },
    revalidate: 60,
  };
};
