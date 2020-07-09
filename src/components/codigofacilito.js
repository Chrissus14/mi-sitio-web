import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      codigofacilitoJson {
        data {
          courses {
            title
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Mis certificados online
          </h2>
          <div className="flex mt-8">
            {data.codigofacilitoJson.data.courses.map(course => {
              return (
                <div className="shadow p-4 bg-white mr-4">
                  <h4 className="font-bold">{course.title}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
