<h2>Motivation</h2>
<ul>
<li>Experiment with pnpm which uses linking strategy to reduces disk space usage and speeds up the installation process</li>
<li>Experiment with pnpm to create and use monorepo</li>
</ul>


<h2>Setup</h2>
<ul>
<li>create package file

```
pnpm init
```

</li>
<li>install once pnpm globally 

```
npm i -g pnpm
```

</li>

<li>monorepo is defines using pnpm-lock.yaml as follows 

```
packages:
  - packages/*
```

The above looks for package.json under childs of packages directory
</li>

</ul>



<h2>Usage</h2>
The following will invoke pnpm for all directories defined in pnpm-workspace.yaml
```
pnpm i
```

remove node_modules

```
pnpm i
```

The second time will be faster because the files all ready are on the local .pnpm store


<h2>open issues</h2>
can i use pnpm to build all projects
