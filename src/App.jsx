/* REACT */
import { Suspense } from 'react';
/* REACT ROUTER */
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from 'react-router-dom';
/* AOS ANIMATIONS */
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();
/* DATA */
import { posts } from './data';
/* COMPONENTS */
import { ErrorMessage } from './components';
/* PAGES */
import {
  About,
  Contacts,
  Courses,
  Developers,
  FacultyLogin,
  FacultyPortal,
  StudentLogin,
  StudentPortal,
  Home,
  LatestNewsAndUpdates,
  OrganizationChart,
  SinglePost,
} from './pages';
/* PORTAL COMPONENTS */
import { Messages, Schedule, Calendar, Grades, Password } from './portalPages';
/* LAYOUTS */
import {
  NavbarFooterLayout,
  FooterLayout,
  StudentPortalNavigationLayout,
} from './layouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* WRAPPED WITH NAVBAR AND FOOTER COMPONENT */}
      <Route
        path='/'
        element={
          <Suspense
            fallback={
              <div className='min-h-screen grid place-items-center'>
                <div className='spinner'></div>
              </div>
            }
          >
            <NavbarFooterLayout />
          </Suspense>
        }
        errorElement={
          <Suspense
            fallback={
              <div className='min-h-screen grid place-items-center'>
                <div className='spinner'></div>
              </div>
            }
          >
            <ErrorMessage />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <Home />
            </Suspense>
          }
          errorElement={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <ErrorMessage />
            </Suspense>
          }
        />
        <Route
          path='about'
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <About />
            </Suspense>
          }
          errorElement={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <ErrorMessage />
            </Suspense>
          }
        />
        <Route
          path='courses'
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <Courses />
            </Suspense>
          }
          errorElement={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <ErrorMessage />
            </Suspense>
          }
        />
        <Route
          path='contacts'
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <Contacts />
            </Suspense>
          }
          errorElement={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <ErrorMessage />
            </Suspense>
          }
        />
        <Route
          path='developers'
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <Developers />
            </Suspense>
          }
          errorElement={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <ErrorMessage />
            </Suspense>
          }
        />
        <Route
          path='posts'
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <LatestNewsAndUpdates posts={posts} />
            </Suspense>
          }
          errorElement={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <ErrorMessage />
            </Suspense>
          }
        />
        <Route
          path='officials'
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <OrganizationChart />
            </Suspense>
          }
          errorElement={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <ErrorMessage />
            </Suspense>
          }
        />
        <Route
          path='student-login'
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <StudentLogin />
            </Suspense>
          }
        />
        <Route
          path='faculty-login'
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <FacultyLogin />
            </Suspense>
          }
        />
        <Route
          path='student-portal'
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <StudentPortalNavigationLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense
                fallback={
                  <div className='min-h-screen grid place-items-center'>
                    <div className='spinner'></div>
                  </div>
                }
              >
                <StudentPortal />
              </Suspense>
            }
          />
          <Route
            path='schedule'
            element={
              <Suspense
                fallback={
                  <div className='min-h-screen grid place-items-center'>
                    <div className='spinner'></div>
                  </div>
                }
              >
                <Schedule />
              </Suspense>
            }
          />
          <Route
            path='calendar'
            element={
              <Suspense
                fallback={
                  <div className='min-h-screen grid place-items-center'>
                    <div className='spinner'></div>
                  </div>
                }
              >
                <Calendar />
              </Suspense>
            }
          />
          <Route
            path='grades'
            element={
              <Suspense
                fallback={
                  <div className='min-h-screen grid place-items-center'>
                    <div className='spinner'></div>
                  </div>
                }
              >
                <Grades />
              </Suspense>
            }
          />
          <Route
            path='messages'
            element={
              <Suspense
                fallback={
                  <div className='min-h-screen grid place-items-center'>
                    <div className='spinner'></div>
                  </div>
                }
              >
                <Messages />
              </Suspense>
            }
          />
          <Route
            path='password'
            element={
              <Suspense
                fallback={
                  <div className='min-h-screen grid place-items-center'>
                    <div className='spinner'></div>
                  </div>
                }
              >
                <Password />
              </Suspense>
            }
          />
        </Route>
        {/*  <Route path='student-portal' element={<StudentPortal />} />
        <Route path='faculty-portal' element={<FacultyPortal />} /> */}
      </Route>
      {/* END OF - WRAPPED WITH  NAVBAR AND FOOTER COMPONENT */}
      {/* ONLY HAS A FOOTER COMPONENT */}
      <Route
        path='post/:id'
        element={
          <Suspense
            fallback={
              <div className='min-h-screen grid place-items-center'>
                <div className='spinner'></div>
              </div>
            }
          >
            <FooterLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <SinglePost posts={posts} />
            </Suspense>
          }
          errorElement={
            <Suspense
              fallback={
                <div className='min-h-screen grid place-items-center'>
                  <div className='spinner'></div>
                </div>
              }
            >
              <ErrorMessage />
            </Suspense>
          }
        />
      </Route>
      {/*END OF - ONLY HAS A FOOTER COMPONENT */}

      <Route
        path='*'
        element={
          <Suspense
            fallback={
              <div className='min-h-screen grid place-items-center'>
                <div className='spinner'></div>
              </div>
            }
          >
            <ErrorMessage />
          </Suspense>
        }
      />
    </>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
